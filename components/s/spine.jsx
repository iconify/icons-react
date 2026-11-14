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
		"content": `<style>.diz_znbqq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.125 1.75h-4.25q-2.125 0-2.125 2.125T9.875 6h4.25q.88 0 1.503-.622q.622-.623.622-1.503t-.622-1.503q-.623-.622-1.503-.622m-4.25 5.5h4.25q.88 0 1.503.622q.622.623.622 1.503t-.622 1.503t-1.503.622h-4.25q-2.125 0-2.125-2.125T9.875 7.25m4.25 5.5h-4.25q-2.125 0-2.125 2.125T9.875 17h4.25q.88 0 1.503-.622q.622-.623.622-1.503t-.622-1.503t-1.503-.622m-4.25 5.5h4.25q.88 0 1.503.622q.622.623.622 1.503t-.622 1.503q-.623.622-1.503.622h-4.25q-2.125 0-2.125-2.125t2.125-2.125");
}
</style><path class="diz_znbqq"/>`,
		"fallback": "uix-solid:spine",
	});
}

export default Component;
