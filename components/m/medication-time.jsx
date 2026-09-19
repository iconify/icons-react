import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/aew_ogbkx.css';
import '../../css/q/qz-mrebrm.css';
import '../../css/t/tgxo-cukz.css';
import '../../css/w/w7__z0ipt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAvjqkccx"><g class="rohhhzb0l"><rect class="aew_ogbkx"/><path class="qz-mrebrm"/><circle class="tgxo-cukz"/><path class="w7__z0ipt"/></g></mask></defs><path mask="url(#SVGAvjqkccx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:medication-time",
	});
}

export default Component;
