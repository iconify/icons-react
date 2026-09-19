import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k50641bso.css';
import '../../css/o/ogqr6mqqi.css';
import '../../css/b/b5a6r1b6z.css';
import '../../css/k/kib4n-bfq.css';
import '../../css/b/bwlnkpx5x.css';
import '../../css/n/ngfpl3m9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k50641bso"/><path class="ogqr6mqqi"/><path class="b5a6r1b6z"/><circle class="kib4n-bfq"/><circle class="bwlnkpx5x"/><path class="ngfpl3m9i"/>`,
		"fallback": "fxemoji:oldpersonalcomputer",
	});
}

export default Component;
