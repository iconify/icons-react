import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt8r-f.css';
import '../../css/s/s1ui7u.css';
import '../../css/f/fv36qy.css';
import '../../css/s/so-from-46.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9jpx1r.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt8r-f s1ui7u"/><path class="fv36qy s1ui7u"/>`,
		"fallback": "line-md:marker-twotone",
	});
}

export default Component;
