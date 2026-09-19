import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.iipixfb4y {
  fill: var(--svg-color--fff, #fff);
  d: path("M41.5 44c-2.2 2.3-5.4 3.4-9.5 3.4s-7.3-1.1-9.5-3.4c-2.9-2.8-4.4-6.8-4.4-12c0-5.3 1.5-9.3 4.4-12c2.2-2.3 5.4-3.4 9.5-3.4s7.3 1.1 9.5 3.4c2.9 2.7 4.4 6.7 4.4 12c0 5.2-1.5 9.2-4.4 12m-3.8-4.4c1.4-1.8 2.1-4.3 2.1-7.6s-.7-5.8-2.1-7.5s-3.3-2.7-5.7-2.7s-4.3.9-5.7 2.7s-2.1 4.3-2.1 7.6s.7 5.8 2.1 7.6s3.3 2.7 5.7 2.7s4.3-1.1 5.7-2.8");
}
</style><circle class="bgatx5byk"/><path class="iipixfb4y"/>`,
		"fallback": "emojione:letter-o",
	});
}

export default Component;
