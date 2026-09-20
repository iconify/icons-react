import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tz-6m_bsl {
  fill: currentColor;
  d: path("M12 2a7 7 0 0 1 5 11.898v7.352a.75.75 0 0 1-1.093.668l-.09-.055L12 19.176l-3.816 2.687a.75.75 0 0 1-1.175-.508L7 21.25l-.002-7.352A7 7 0 0 1 12 2m3.5 17.805v-4.741A6.97 6.97 0 0 1 12 16c-1.275 0-2.47-.34-3.5-.936v4.74l3.067-2.159a.75.75 0 0 1 .763-.06l.1.06zv-4.741zM12 3.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11");
}
</style><path class="tz-6m_bsl"/>`,
		"fallback": "fluent:ribbon-24-regular",
	});
}

export default Component;
