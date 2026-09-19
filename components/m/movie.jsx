import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/ka8m53b1q.css';
import '../../css/z/zez_l90sc.css';
import '../../css/g/gya453bci.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOx5Q8cfB"><g class="rohhhzb0l"><path class="ka8m53b1q"/><path class="zez_l90sc"/><path class="gya453bci"/></g></mask></defs><path mask="url(#SVGOx5Q8cfB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:movie",
	});
}

export default Component;
