import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yl6j-sw3a.css';
import '../../css/o/o1wj90bvq.css';
import '../../css/w/wvy771dan.css';
import '../../css/z/zk8wz60ql.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3kKZIdNq"><g class="aql7dnt-u"><path class="yl6j-sw3a"/><ellipse class="o1wj90bvq"/><ellipse class="wvy771dan"/><path class="zk8wz60ql"/></g></mask></defs><path mask="url(#SVG3kKZIdNq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tire-swing",
	});
}

export default Component;
