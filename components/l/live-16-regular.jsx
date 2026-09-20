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
		"content": `<style>.hisp8dqdy {
  fill: currentColor;
  d: path("M3.051 3.05a.5.5 0 0 1 .707.707a6 6 0 0 0 0 8.485a.501.501 0 0 1-.707.708a7 7 0 0 1 0-9.9m9.193 0a.5.5 0 0 1 .707 0a7 7 0 0 1 0 9.9a.5.5 0 0 1-.707-.708a6 6 0 0 0 0-8.485a.5.5 0 0 1 0-.707M4.819 4.818a.5.5 0 1 1 .707.707a3.5 3.5 0 0 0 0 4.95a.5.5 0 0 1-.707.707a4.5 4.5 0 0 1 0-6.364m5.656 0a.5.5 0 0 1 .707 0a4.5 4.5 0 0 1 0 6.364a.5.5 0 0 1-.707-.707a3.5 3.5 0 0 0 0-4.95a.5.5 0 0 1 0-.707M8 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2");
}
</style><path class="hisp8dqdy"/>`,
		"fallback": "fluent:live-16-regular",
	});
}

export default Component;
