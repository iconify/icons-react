import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.it0uv5f2h {
  fill: currentColor;
  d: path("M15.5 3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5m-5.447.214A1.25 1.25 0 0 1 12 4.252v11.5a1.25 1.25 0 0 1-1.954 1.033l-8.499-5.793a1.25 1.25 0 0 1 .007-2.07zM11 4.252a.25.25 0 0 0-.39-.207L2.113 9.752a.25.25 0 0 0-.002.414l8.5 5.793a.25.25 0 0 0 .39-.207z");
}
</style><path class="it0uv5f2h"/>`,
		"fallback": "fluent:previous-frame-20-regular",
	});
}

export default Component;
