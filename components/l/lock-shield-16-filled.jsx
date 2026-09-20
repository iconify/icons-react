import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.smez1e__l {
  fill: currentColor;
  d: path("M11.12 7.963a.574.574 0 0 1 .76 0c.508.484 1.484 1.254 2.683 1.412c.24.031.437.212.437.438v2.11c0 2.839-2.784 3.87-3.386 4.06a.37.37 0 0 1-.227 0c-.602-.19-3.387-1.22-3.387-4.06v-2.11c0-.226.197-.407.437-.438c1.199-.158 2.174-.928 2.682-1.412M8 1a3 3 0 0 1 3 3v2c.957 0 1.756.673 1.952 1.571a6 6 0 0 1-.194-.16l-.187-.172l-.115-.098a1.58 1.58 0 0 0-1.912 0l-.115.098c-.432.412-1.147.956-1.96 1.117l-.269.045c-.531.112-1.116.54-1.192 1.254L7 9.812v2.112A4.7 4.7 0 0 0 8.108 15H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2V4a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v2h4V4a2 2 0 0 0-2-2");
}
</style><path class="smez1e__l"/>`,
		"fallback": "fluent:lock-shield-16-filled",
	});
}

export default Component;
