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
		"content": `<style>.c1vkhtz-c {
  fill: var(--svg-color--a1f931, #a1f931);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.qhn8vjbqz {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("m8.808 14.167l2.251-8.603c-1.084-.229-3.434.023-4.455 3.066c-.938 2.799.965 5.14 2.204 5.537m6.384-4.333l-2.251 8.603c1.084.228 3.434-.024 4.455-3.067c.938-2.799-.965-5.14-2.204-5.536M19.02 9.5h-7.961c.808-3.313 2.93-4.045 3.888-3.998H20zm-6.079 5H4.98L4 18.498h5.052c.96.048 3.08-.685 3.889-3.998");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="c1vkhtz-c"/><path clip-rule="evenodd" class="qhn8vjbqz"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:shroom-background",
	});
}

export default Component;
