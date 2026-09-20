import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwvex34ks.css';
import '../../css/t/t5xpkqbrm.css';
import '../../css/v/vsd0-u6lg.css';
import '../../css/r/rpl21sazg.css';
import '../../css/q/q4tk7ccdv.css';
import '../../css/v/vozvunlqv.css';
import '../../css/t/ti3tt03yv.css';
import '../../css/o/oy06n2bnd.css';
import '../../css/e/en64kkb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g fill-opacity="0" class="rwvex34ks"><g class="t5xpkqbrm"><path class="vsd0-u6lg"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.4s" to="1"/></path><path stroke-dashoffset="28" class="rpl21sazg"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" to="0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.4s" to="1"/></path><path stroke-dashoffset="28" class="q4tk7ccdv"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.4s" to="0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.4s" to="1"/></path></g><g stroke-dashoffset="12" class="vozvunlqv"><path class="ti3tt03yv"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" to="0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.4s" to="1"/></path><path class="oy06n2bnd"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" to="0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.4s" to="1"/></path><path class="en64kkb8l"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" to="0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.4s" to="1"/></path></g></g>`,
		"fallback": "line-md:list-3-solid",
	});
}

export default Component;
