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
		"content": `<style>.evivo-80p {
  fill: currentColor;
  d: path("m13.28 8.5l.76.58l.92-.23L13 14.8V8.29zm-4.25.36L11 14.8V8.29l-.28.21l-.76.59z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.kg74nnbch {
  fill: currentColor;
  d: path("M14.5 6.92L13 5.77V3.4c0-.26.22-.48.5-.48s.5.21.5.48V4h2v-.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92L6 6.07l5.05 15.25c.15.45.55.68.95.68s.8-.23.95-.69L18 6.07zM13.28 8.5l.76.58l.92-.23L13 14.8V8.29zm-3.32.59l.76-.58l.28-.22v6.51L9.03 8.86z");
}
</style><path class="evivo-80p"/><path class="kg74nnbch"/>`,
		"fallback": "ic:twotone-umbrella",
	});
}

export default Component;
