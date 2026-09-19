import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wjdswlb4u.css';
import '../../css/l/layqpjf-y.css';
import '../../css/f/fmyh7abrs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCqbjHezU"><g class="wwvp95byt"><rect transform="rotate(45 24.762 3.243)" class="wjdswlb4u"/><path class="layqpjf-y"/><path class="fmyh7abrs"/></g></mask></defs><path mask="url(#SVGCqbjHezU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:tray",
	});
}

export default Component;
