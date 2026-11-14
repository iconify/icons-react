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
		"content": `<style>.afus2xb1r {
  d: path("M6 2.5h10v3H6Zm1 3V7c-2 .5-3 2-3 4v8q0 .123.012.245t.036.243t.06.238t.082.231q.047.113.105.221q.058.109.126.211q.069.102.146.197q.078.095.165.182t.182.165t.197.146t.211.126q.108.058.221.105q.114.047.231.082t.238.06t.243.036t.245.012h6.833M18 11.794V11c0-2-1-3.5-3-4V5.5m5.75 13A2.75 2.75 0 1 1 18 15.75");
}

.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="afus2xb1r"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:recycle-jar",
	});
}

export default Component;
