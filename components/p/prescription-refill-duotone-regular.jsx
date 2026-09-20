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
		"content": `<style>.ckrzk6zny {
  d: path("M10.5 10.5 8 13l2.5 2.5");
}

.d71dwlbpe {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 3h14l4 4v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2m14 0v4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fbrxx_p0f {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10.5 10.5 8 13l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gcalxb98a {
  d: path("M8 13h8");
}

.k9od9gkcz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 13h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qtxvlht3c {
  d: path("M8 17h8");
}

.t-ht_no5g {
  d: path("M4 3h14l4 4v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2m14 0v4h4");
}

.xfirob-xp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 17h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="d71dwlbpe"/><path class="k9od9gkcz"/><path class="fbrxx_p0f"/><path class="xfirob-xp"/><path class="t-ht_no5g"/><path class="gcalxb98a"/><path class="ckrzk6zny"/><path class="qtxvlht3c"/></g>`,
		"fallback": "iconmind:prescription-refill-duotone-regular",
	});
}

export default Component;
