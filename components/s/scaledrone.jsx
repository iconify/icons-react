import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.stui2mbih {
  stop-color: var(--svg-color--fff, #fff);
  stop-opacity: 0;
}

.u_xlpfigi {
  cx: 128px;
  cy: 128px;
  r: 128px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ushx8nbnz {
  fill: var(--svg-color--6466bb, #6466bb);
  d: path("M205.6 83.2L238.9 64c-30-52-96.6-69.9-148.6-39.8c-52 30-69.9 96.6-39.8 148.6L17.1 192c30 52 96.6 69.9 148.6 39.8c52.1-30 69.9-96.6 39.9-148.6");
}

.vuuixnbkm {
  stop-color: var(--svg-color--6466bb, #6466bb);
}
</style><defs><linearGradient id="SVGKuM0Kdhr" x1="75.094%" x2="26.264%" y1="93.381%" y2="8.971%"><stop offset="0%" class="stui2mbih"/><stop offset="47.52%" class="vuuixnbkm"/><stop offset="100%" class="stui2mbih"/></linearGradient></defs><circle fill="url(#SVGKuM0Kdhr)" class="u_xlpfigi"/><path class="ushx8nbnz"/>`,
		"fallback": "logos:scaledrone",
	});
}

export default Component;
