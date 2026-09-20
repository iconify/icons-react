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
		"content": `<style>.r0-ay3xwh {
  fill: currentColor;
  d: path("M8.673 12.942h1v-2.807q0-.952.684-1.63q.683-.678 1.643-.678v-1q-1.38 0-2.354.964q-.973.963-.973 2.344zM3 20v-4.75h2.827v-5.115q0-2.564 1.797-4.35T12 4t4.376 1.786t1.797 4.349v5.115H21V20z");
}
</style><path class="r0-ay3xwh"/>`,
		"fallback": "material-symbols-light:siren-sharp",
	});
}

export default Component;
