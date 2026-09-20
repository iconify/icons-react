import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0ofodbav.css';
import '../../css/l/lz8ci3b1r.css';
import '../../css/b/b7a_exv0i.css';
import '../../css/h/hzpfs2baq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0ofodbav"/><path class="lz8ci3b1r"/><path class="b7a_exv0i"/><path class="hzpfs2baq"/>`,
		"fallback": "streamline-pixel:interface-essential-home-1",
	});
}

export default Component;
