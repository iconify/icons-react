import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrwg9d6kl.css';
import '../../css/e/eqy7e86_g.css';
import '../../css/n/nuc11qh6t.css';
import '../../css/w/w-9yqheju.css';
import '../../css/n/ncbouabcg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrwg9d6kl"/><path class="eqy7e86_g"/><path class="nuc11qh6t"/><path class="w-9yqheju"/><path class="ncbouabcg"/>`,
		"fallback": "devicon:nhibernate-wordmark",
	});
}

export default Component;
