import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/aiuyamb2n.css';
import '../../css/b/bst2n4bqq.css';
import '../../css/k/ko8634b1x.css';
import '../../css/y/y0n8bl3bq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGs4a5HdiH"><g class="aql7dnt-u"><path class="aiuyamb2n"/><circle class="bst2n4bqq"/><circle class="ko8634b1x"/><path class="y0n8bl3bq"/></g></mask></defs><path mask="url(#SVGs4a5HdiH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:list-success",
	});
}

export default Component;
