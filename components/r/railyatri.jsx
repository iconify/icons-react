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
		"content": `<style>.b_zpjzbkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.896 18.927h-5.617c-.887 0-1.606.776-1.606 1.734c0 .957.719 1.733 1.606 1.733h9.508");
}

.eadrxmbnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.7 20.661c0 .957-.72 1.733-1.607 1.733h-8.642a1.606 1.606 0 1 0 0 3.21h2.247c.887 0 1.606.776 1.606 1.734c0 .959-.719 1.735-1.606 1.735H5.642a1.606 1.606 0 1 0 0 3.21h36.136c5.297 0 1.828-6.604-1.674-10.163c-3.262-3.313-7.743-6.402-12.394-6.402H16.475a1.606 1.606 0 1 0 0 3.21h5.618c.887 0 1.606.775 1.606 1.733");
}

.k1d2-ssth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.008 15.718a1.606 1.606 0 1 0 0 3.21h3.526a1.606 1.606 0 1 0 0-3.21zm-2.845 6.676a1.606 1.606 0 1 0 0 3.21h3.204a1.606 1.606 0 1 0 0-3.21z");
}
</style><path class="k1d2-ssth"/><path class="eadrxmbnx"/><path class="b_zpjzbkp"/>`,
		"fallback": "arcticons:railyatri",
	});
}

export default Component;
