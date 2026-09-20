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
		"content": `<style>.dkols7bau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.155 28.832L19.168 7.845A8.007 8.007 0 1 0 7.845 19.168l20.987 20.987a8.007 8.007 0 1 0 11.323-11.323");
}

.k9qin_n-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.323 24l4.832-4.832A8.007 8.007 0 1 0 28.832 7.845l-4.847 4.847M12.677 24l-4.832 4.832a8.007 8.007 0 1 0 11.323 11.323l4.817-4.817");
}

.p16wx4bbl {
  cx: 34.345px;
  cy: 34.494px;
  r: 4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="dkols7bau"/><path class="k9qin_n-k"/><circle class="p16wx4bbl"/>`,
		"fallback": "arcticons:nothing-x",
	});
}

export default Component;
