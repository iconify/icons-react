import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xoraenp0h.css';
import '../../css/v/v90bosb7e.css';
import '../../css/b/bsgidkvrf.css';
import '../../css/e/e9q41tbrh.css';
import '../../css/a/a9bf9mbdh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTg9gpdMN"><g class="ft5dv1b6b"><path class="xoraenp0h"/><path clip-rule="evenodd" class="v90bosb7e"/><path clip-rule="evenodd" class="bsgidkvrf"/><path class="e9q41tbrh"/><path clip-rule="evenodd" class="a9bf9mbdh"/></g></mask></defs><path mask="url(#SVGTg9gpdMN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:qingniao-clue",
	});
}

export default Component;
