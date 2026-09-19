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

.ob-fx11um {
  fill: var(--svg-color--fff, #fff);
  d: path("m49.4 29l-5.3 3.1v.4c0 2.7-2.2 4.9-4.8 4.9H27.6v-3.8L16 40.2L27.6 47v-3.8h11.7c2.8 0 5.5-1.1 7.5-3.1s3.1-4.7 3.1-7.6c.1-1.3-.1-2.4-.5-3.5m-29.6 2.5c0-2.7 2.2-4.9 4.8-4.9h11.8v3.8L48 23.8L36.4 17v3.8H24.6c-2.8 0-5.5 1.1-7.5 3.1S14 28.6 14 31.5c0 1.2.2 2.4.6 3.5l5.3-3.1c-.1-.1-.1-.2-.1-.4");
}
</style><circle class="bgatx5byk"/><path class="ob-fx11um"/>`,
		"fallback": "emojione:repeat-button",
	});
}

export default Component;
