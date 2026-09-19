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

.v5onwncao {
  fill: var(--svg-color--fff, #fff);
  d: path("M20.3 46.5v-29h6v11.1h11.3V17.5h6v29h-6v-13H26.4v13z");
}
</style><circle class="bgatx5byk"/><path class="v5onwncao"/>`,
		"fallback": "emojione:letter-h",
	});
}

export default Component;
