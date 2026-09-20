import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bd9gczbnq {
  cx: 13px;
  cy: 13px;
  r: 13px;
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.kvn14gsjy {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
}

.osh2lcboo {
  d: path("m20.648 8.261l-7.045 6a1 1 0 0 1-1.301-.004l-6.955-6C4.645 7.652 5.073 6.5 6 6.5h14c.93 0 1.356 1.158.648 1.761M8.69 8.5l4.27 3.683L17.282 8.5z");
}

.rbz4eybpe {
  d: path("M20 6.5H6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-13 11v-9h12v9z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVG5ImSHdpS"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="rbz4eybpe"/><path class="osh2lcboo"/></g></mask></defs><circle mask="url(#SVG5ImSHdpS)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:letter-circle-filled",
	});
}

export default Component;
