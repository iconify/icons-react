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

.hyjdh9sba {
  fill: var(--svg-color--fff, #fff);
  d: path("M38 17.5h6.9l-9.7 18.1v10.9h-6.1V35.6l-10-18.1h7.1l6 12.6z");
}
</style><circle class="bgatx5byk"/><path class="hyjdh9sba"/>`,
		"fallback": "emojione:letter-y",
	});
}

export default Component;
