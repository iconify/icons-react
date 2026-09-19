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
		"content": `<style>.jaj7uqbhp {
  cx: 16px;
  cy: 23px;
  r: 1px;
  fill: currentColor;
}

.koo6_lfxn {
  cx: 12px;
  cy: 23px;
  r: 1px;
  fill: currentColor;
}

.vuw3_pqwr {
  fill: currentColor;
  d: path("M13.41 10L17 6.42c.39-.39.39-1.02 0-1.42L12.21.21a.7.7 0 0 0-.5-.21c-.39 0-.71.32-.71.71v6.88L7.11 3.71A.996.996 0 1 0 5.7 5.12L10.59 10L5.7 14.89a.996.996 0 1 0 1.41 1.41L11 12.41v6.88c0 .39.32.71.71.71c.19 0 .37-.07.5-.21L17 15c.39-.39.39-1.02 0-1.42zM13 3.83l1.88 1.88L13 7.59zm0 12.34v-3.76l1.88 1.88z");
}

.z2ozebbmv {
  cx: 8px;
  cy: 23px;
  r: 1px;
  fill: currentColor;
}
</style><circle class="koo6_lfxn"/><circle class="z2ozebbmv"/><circle class="jaj7uqbhp"/><path class="vuw3_pqwr"/>`,
		"fallback": "ic:round-settings-bluetooth",
	});
}

export default Component;
