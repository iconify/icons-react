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
		"content": `<style>.g9ag-gpqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.422 39.724L41.27 7.537c.342-.654 1.336-.325 1.22.404l-3.828 24.112");
}

.wwemo_bbi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.832 23.697l-9.027-12.938l-12.345 4.408l12.962 24.557l14.24-7.671m-20.867-4.884L6.765 40.552c-.48.583-1.42.115-1.243-.62l5.938-24.764");
}
</style><path class="wwemo_bbi"/><path class="g9ag-gpqe"/>`,
		"fallback": "arcticons:newsbreak",
	});
}

export default Component;
