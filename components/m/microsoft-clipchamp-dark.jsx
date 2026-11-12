import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhap3dbvq.css';
import '../../css/b/bheb3jb6o.css';
import '../../css/k/kxuh6j-9t.css';
import '../../css/g/gqxfigb8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhap3dbvq"/><path class="bheb3jb6o"/><path class="kxuh6j-9t"/><path class="gqxfigb8q"/>`,
		"fallback": "selfhst:microsoft-clipchamp-dark",
	});
}

export default Component;
