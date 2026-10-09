import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okxq6xetl.css';
import '../../css/j/j6fmf5hbf.css';
import '../../css/b/bww57vh4i.css';
import '../../css/h/h61y1xbud.css';
import '../../css/e/evlf47zqe.css';
import '../../css/z/zqqu5cq4f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okxq6xetl"/><path class="j6fmf5hbf"/><path class="bww57vh4i"/><path class="h61y1xbud"/><path class="evlf47zqe"/><path class="zqqu5cq4f"/>`,
		"fallback": "energy-icons:pantograph-charger-20",
	});
}

export default Component;
