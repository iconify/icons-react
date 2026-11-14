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
		"content": `<style>.jj747yf1y {
  d: path("M11.63 20.13L2.5 11V4q0-.074.007-.147t.022-.146t.036-.142q.021-.071.049-.139t.063-.133t.076-.126t.087-.119q.047-.057.099-.109t.109-.099q.057-.046.119-.087t.126-.076t.133-.063t.139-.049t.142-.036t.146-.022T4 2.5h7l9.5 9.5l-.314.314");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.r3hn0gbbu {
  d: path("M5.5 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jj747yf1y"/><path class="r3hn0gbbu"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:presale",
	});
}

export default Component;
