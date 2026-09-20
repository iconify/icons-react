import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.han2xbc4v {
  fill: var(--svg-color--99aab5, #99aab5);
  d: path("M14.339 10.725S16.894 34.998 18.001 35s3.66-24.275 3.66-24.275z");
}

.maa75jbqu {
  cx: 18px;
  cy: 8px;
  r: 8px;
  fill: var(--svg-color--dd2e44, #dd2e44);
}

.va8tq_bmb {
  cx: 18px;
  cy: 34.5px;
  fill: var(--svg-color--292f33, #292f33);
  rx: 4px;
  ry: 1.5px;
}
</style><ellipse class="va8tq_bmb"/><path class="han2xbc4v"/><circle class="maa75jbqu"/>`,
		"fallback": "twemoji:round-pushpin",
	});
}

export default Component;
