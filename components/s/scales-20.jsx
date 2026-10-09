import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s60tohl9o.css';
import '../../css/p/pzzjixb2k.css';
import '../../css/b/b_n-robbb.css';
import '../../css/w/wh3r_vb2q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s60tohl9o"/><path class="pzzjixb2k"/><path class="b_n-robbb"/><path class="wh3r_vb2q"/>`,
		"fallback": "energy-icons:scales-20",
	});
}

export default Component;
