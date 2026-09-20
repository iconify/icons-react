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
		"content": `<style>.rgw6jvbjl {
  fill: currentColor;
  d: path("M2 4.998v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m7.65 4.86a.5.5 0 0 1 0-.707l.65-.65H8.752a.5.5 0 0 1 0-1h1.542l-.643-.643a.5.5 0 1 1 .707-.707l1.5 1.5a.5.5 0 0 1 0 .707l-1.5 1.5a.5.5 0 0 1-.707 0M6.352 6.151a.5.5 0 0 1 0 .707L5.71 7.5h1.54a.5.5 0 1 1 0 1H5.7l.652.651a.5.5 0 1 1-.707.707l-1.5-1.5a.5.5 0 0 1 0-.707l1.5-1.5a.5.5 0 0 1 .707 0");
}
</style><path class="rgw6jvbjl"/>`,
		"fallback": "fluent:scale-fit-16-filled",
	});
}

export default Component;
