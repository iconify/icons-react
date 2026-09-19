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
		"content": `<style>.evtfkn1hl {
  cx: 29.529px;
  cy: 25.301px;
  r: 0.75px;
  fill: currentColor;
}

.fjy3fhb4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.398 17.35a18.7 18.7 0 1 1 30.797 19.62M11.95 38.071a18.7 18.7 0 0 1-6.68-14.325");
}

.m-xicubzj {
  cx: 24.196px;
  cy: 24.846px;
  r: 0.75px;
  fill: currentColor;
}

.mkna5i00o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.706 25.402a91 91 0 0 1-29.033-6.248m20.485 4.54l-.297 1.847");
}

.oc2-cr56m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.53 25.301l1.557-4.204l-2.6-5.652l-7.596 4.48l3.305 4.92m4.53-10.555l-3.759 15.645M13.483 42.733l11.484-12.798l8.028 4.51l1.08 8.51");
}

.r0kk43bcz {
  cx: 29.345px;
  cy: 11.846px;
  r: 2.461px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="mkna5i00o"/><circle class="r0kk43bcz"/><path class="oc2-cr56m"/><circle class="m-xicubzj"/><circle class="evtfkn1hl"/><path class="fjy3fhb4u"/>`,
		"fallback": "arcticons:shadow-fight-2",
	});
}

export default Component;
