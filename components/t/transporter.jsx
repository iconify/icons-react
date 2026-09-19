import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/xxtby9byu.css';
import '../../css/a/adhr63bhw.css';
import '../../css/m/muzc7jymm.css';
import '../../css/f/fnlh-n-za.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="xxtby9byu"/><path class="adhr63bhw"/><path class="muzc7jymm"/><path class="fnlh-n-za"/></g>`,
		"fallback": "icon-park:transporter",
	});
}

export default Component;
