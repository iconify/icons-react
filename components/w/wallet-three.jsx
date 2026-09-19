import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/via3n2bhx.css';
import '../../css/v/v7x3kmbkg.css';
import '../../css/k/k___aiysz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzp4GDgiU"><g class="ft5dv1b6b"><path class="via3n2bhx"/><rect class="v7x3kmbkg"/><circle transform="matrix(0 -1 -1 0 30 24)" class="k___aiysz"/></g></mask></defs><path mask="url(#SVGzp4GDgiU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:wallet-three",
	});
}

export default Component;
