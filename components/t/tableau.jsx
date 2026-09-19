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
		"content": `<style>.f6r52l_3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.927 7.707v6.178m-2.675-3.125h5.28m-11.316.498v9.256m-4.688-4.806h9.185m-9.493 4.948v6.297m-2.959-3.267h5.871m2.124 3.415v9.407m-4.52-4.754h8.972m4.218 1.507v7.03m-3.079-3.615h5.992m5.724-9.642v9.541m-4.351-4.854h9.273m-.133-11.248v6.662m-3.182-3.482h6.562M32.53 10.898v9.809m-4.386-4.987h9.207M23.96 18.195v10.88m-5.022-5.455h10.378");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="j3s9ivbxi"/><path class="f6r52l_3e"/>`,
		"fallback": "arcticons:tableau",
	});
}

export default Component;
