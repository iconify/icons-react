import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/s3bjvdjgt.css';
import '../../css/i/i29ijccji.css';
import '../../css/h/ha45umb7u.css';
import '../../css/w/w2n_5zeis.css';
import '../../css/w/w45aybjog.css';
import '../../css/v/v58hby3rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="s3bjvdjgt wm-shadow"/><path class="i29ijccji"/><path class="ha45umb7u"/><path class="w2n_5zeis"/><path class="w45aybjog wm-shine"/><path class="v58hby3rh wm-deco"/></g>`,
		"fallback": "withicons-sticker:washing-machine",
	});
}

export default Component;
