import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vq3pbhbzo.css';
import '../../css/u/u_erkqblh.css';
import '../../css/i/ilmtambaf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0uZQceQW"><g class="rohhhzb0l"><path class="vq3pbhbzo"/><path class="u_erkqblh"/><circle transform="rotate(90 35 39)" class="ilmtambaf"/></g></mask></defs><path mask="url(#SVG0uZQceQW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:u-turn-down",
	});
}

export default Component;
