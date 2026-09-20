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
		"content": `<style>.pookkwb8h {
  fill: currentColor;
  d: path("M31.818 5.55L42.45 16.183c2.293 2.292 1.665 6.157-1.234 7.607L30.67 29.062a1.25 1.25 0 0 0-.622.71l-2.684 7.77c-.664 1.92-3.108 2.483-4.544 1.047L17 32.769L7.768 42H6v-1.767L15.232 31l-5.82-5.82c-1.437-1.436-.874-3.88 1.046-4.544l7.77-2.684a1.25 1.25 0 0 0 .71-.623L24.21 6.785c1.45-2.9 5.315-3.527 7.608-1.235");
}
</style><path class="pookkwb8h"/>`,
		"fallback": "fluent:pin-48-filled",
	});
}

export default Component;
