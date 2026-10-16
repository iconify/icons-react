import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzik44b8k.css';
import '../../css/b/blf-vc_7t.css';
import '../../css/z/zuokr1b7x.css';
import '../../css/y/yjdya6b-u.css';
import '../../css/g/g177imbyy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzik44b8k"/><path class="blf-vc_7t"/><path class="zuokr1b7x"/><path class="yjdya6b-u"/><path class="g177imbyy"/>`,
		"fallback": "energy-icons:moped-48-bold",
	});
}

export default Component;
