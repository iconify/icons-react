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
		"content": `<style>.a7iio7bye {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m7.075 11.382l1.143-4q.466-1.632 2.163-1.632h3.238q1.697 0 2.163 1.632l1.143 4q.207.725-.031 1.368h1.475q1.697 0 2.163 1.632l1.143 4q.308 1.078-.367 1.973q-.676.896-1.797.895h-5.522q-1.121.001-1.797-.895q-.109-.144-.192-.293q-.083.149-.192.293q-.676.896-1.797.895H4.489q-1.121.001-1.797-.895q-.675-.895-.367-1.973l1.143-4q.466-1.632 2.163-1.632h1.475q-.238-.643-.031-1.368m3.917 2.868q.021.065.04.132L12 17.769l.968-3.387q.019-.067.04-.132z");
}
</style><path class="a7iio7bye"/>`,
		"fallback": "uix-solid:vault-gold",
	});
}

export default Component;
