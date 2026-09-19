import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/j/j3tgze_bz.css';
import '../../css/y/ytep3bcxs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGV948zcnn"><g class="wqznn1ydc"><path class="j3tgze_bz"/><path class="ytep3bcxs"/></g></mask></defs><path mask="url(#SVGV948zcnn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:thin",
	});
}

export default Component;
