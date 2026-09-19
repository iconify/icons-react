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
		"content": `<style>.bfz0tsbib {
  cx: 12.71px;
  cy: 32.211px;
  r: 4.105px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.elwiu5u0c {
  cx: 35px;
  cy: 32px;
  r: 4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k-sf-zxjj {
  cx: 8.605px;
  cy: 16.816px;
  r: 1.283px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lvzdihqpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.816 32.21h14.368m8.211 0H43.5v-7.184L29.132 11.684H13.737");
}

.ucmdf3b3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.579 17.842L4.5 21.947v10.264h4.105");
}
</style><path class="ucmdf3b3g"/><circle class="k-sf-zxjj"/><circle class="bfz0tsbib"/><circle class="elwiu5u0c"/><path class="lvzdihqpu"/>`,
		"fallback": "arcticons:krkortnu",
	});
}

export default Component;
