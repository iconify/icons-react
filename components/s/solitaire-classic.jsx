import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.up9zlouqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.756 42.5C18.661 41.248 24.094 37.398 24 29.53c-8.87 12.593-21.796-.4-11.865-8.728C17.755 16.09 22.067 11.654 24 5.5c1.933 6.154 6.246 10.59 11.865 15.302C45.797 29.13 32.87 42.122 24 29.53c-.094 7.868 5.339 11.718 12.244 12.97z");
}
</style><path class="up9zlouqg"/>`,
		"fallback": "arcticons:solitaire-classic",
	});
}

export default Component;
