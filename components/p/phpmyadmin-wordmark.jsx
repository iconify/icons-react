import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd56e7efs.css';
import '../../css/g/gt5vq3bem.css';
import '../../css/k/kmzeb0bzh.css';
import '../../css/h/hfvqa-bro.css';
import '../../css/b/bicpjib-n.css';
import '../../css/e/ec78-xbzc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd56e7efs"/><path class="gt5vq3bem"/><path class="kmzeb0bzh"/><path class="hfvqa-bro"/><path class="bicpjib-n"/><path class="ec78-xbzc"/>`,
		"fallback": "devicon:phpmyadmin-wordmark",
	});
}

export default Component;
