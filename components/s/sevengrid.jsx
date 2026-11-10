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
		"content": `<style>.c8u1cb1my {
  cx: 5.55px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.fbkj-abpi {
  cx: 30.15px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.lnmhwmbyt {
  cx: 17.85px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.pc7tgcc6w {
  cx: 11.7px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.trzyf1bvn {
  cx: 24px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.vqjuabc6x {
  cx: 36.3px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.vxzeikb7s {
  cx: 42.45px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}
</style><circle class="c8u1cb1my"/><circle class="pc7tgcc6w"/><circle class="lnmhwmbyt"/><circle class="trzyf1bvn"/><circle class="fbkj-abpi"/><circle class="vqjuabc6x"/><circle class="vxzeikb7s"/>`,
		"fallback": "arcticons:sevengrid",
	});
}

export default Component;
