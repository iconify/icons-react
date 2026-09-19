import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/knrsqtfts.css';
import '../../css/q/qp71o_xbh.css';
import '../../css/r/rvsjambol.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrFFZMe2p"><g class="s9cl3zbei"><circle class="knrsqtfts"/><path class="qp71o_xbh"/><path class="rvsjambol"/></g></mask></defs><path mask="url(#SVGrFFZMe2p)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:timer",
	});
}

export default Component;
