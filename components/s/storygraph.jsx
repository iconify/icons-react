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
		"content": `<style>.eqjsp51xq {
  width: 7.603px;
  height: 29.842px;
  x: 16.564px;
  y: 6.617px;
  rx: 1px;
  ry: 1px;
}

.hlp_znjmy {
  width: 7.603px;
  height: 29.842px;
  x: 5.5px;
  y: 6.617px;
  rx: 1px;
  ry: 1px;
}

.pw8mkhbub {
  width: 7.603px;
  height: 29.842px;
  x: 30.911px;
  y: 6.343px;
  rx: 1px;
  ry: 1px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ytapp3lie {
  width: 37px;
  height: 2.828px;
  x: 5.5px;
  y: 39.043px;
  rx: 1px;
  ry: 1px;
}
</style><g class="y9tr6bcfx"><rect class="hlp_znjmy"/><rect class="eqjsp51xq"/><rect transform="rotate(-16.906 34.712 21.264)" class="pw8mkhbub"/><rect class="ytapp3lie"/></g>`,
		"fallback": "arcticons:storygraph",
	});
}

export default Component;
